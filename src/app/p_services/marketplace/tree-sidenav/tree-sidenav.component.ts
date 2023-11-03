import {CollectionViewer, SelectionChange} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {BehaviorSubject, merge, Observable, forkJoin} from 'rxjs';
import {map} from 'rxjs/operators';
import { TreeServiceMarketPlaceService } from '../services/tree-service-market-place.service';
import { ServiceCatalog, ServiceCategory } from 'src/app/openApis/serviceCatalogManagement/models';
import { ServiceCategoryService } from 'src/app/openApis/serviceCatalogManagement/services';

export class DynamicFlatNode {
  constructor(public item: string, public level = 1, public expandable = false,
              public info: ServiceCatalog|ServiceCategory,
              public isLoading = false) {}
}


@Injectable()
export class DynamicDataSource {

  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);

  get data(): DynamicFlatNode[] { return this.dataChange.value; }
  set data(value: DynamicFlatNode[]) {
    this._treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(private _treeControl: FlatTreeControl<DynamicFlatNode>,
              private _categoryService: ServiceCategoryService) {}

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this._treeControl.expansionModel.changed.subscribe(change => {
      if ((change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
    }
  }

  /**
   * Toggle the node, remove from display list
   */
  toggleNode(node: DynamicFlatNode, expand: boolean) {

    // const children = this._database.getChildren(node.item);
    const index = this.data.indexOf(node);

    if (node.info.category.length === 0 || index < 0) { // If no children, or cannot find the node, no op
      return;
    }

    if (expand) {
      let childrenCategoryRequests: Observable<ServiceCategory>[] = []

      node.info.category.forEach(child => {
        childrenCategoryRequests.push(this._categoryService.retrieveServiceCategory({ id: child.id }))
      })

      forkJoin(childrenCategoryRequests).subscribe(
        children => {
          const nodes = children.map(category =>
          new DynamicFlatNode(category.name, node.level + 1, category.category.length > 0, category));
          this.data.splice(index + 1, 0, ...nodes);
          // notify the change
          this.dataChange.next(this.data);
        }
      )
    } else {
      let count = 0;
      for (let i = index + 1; i < this.data.length
        && this.data[i].level > node.level; i++ , count++) { }
      this.data.splice(index + 1, count);
      // notify the change
      this.dataChange.next(this.data);
    }
  
        // // notify the change
        // this.dataChange.next(this.data);
        
    
    // node.isLoading = true;

    // setTimeout(() => {
    //   if (expand) {
    //     const nodes = children_Categories.map(cat =>
    //       new DynamicFlatNode(cat.name, node.level + 1, true, cat));
    //     this.data.splice(index + 1, 0, ...nodes);
    //   } else {
    //     let count = 0;
    //     for (let i = index + 1; i < this.data.length
    //       && this.data[i].level > node.level; i++, count++) {}
    //     this.data.splice(index + 1, count);
    //   }

    //   // notify the change
    //   console.log(this.data)
    //   this.dataChange.next(this.data);
    //   node.isLoading = false;
    // }, 1000);

    // fetchCategoryFromRef() => {}
  }
}

/**
 * @title Tree with dynamic data
 */

@Component({
  selector: 'app-tree-sidenav',
  templateUrl: './tree-sidenav.component.html',
  styleUrls: ['./tree-sidenav.component.scss']
 
})
export class TreeSidenavComponent {

  constructor(categoryService: ServiceCategoryService, private treeMarketPlaceService: TreeServiceMarketPlaceService) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, categoryService);
  }

  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

  ngOnInit(): void {
    this.treeMarketPlaceService.catalogs$.subscribe(
      data => {
        // this.initialDataObjArr = data
        const initialData = data.map(catalog => new DynamicFlatNode(catalog.name, 0, catalog.category.length > 0, catalog ))
        this.dataSource.data = initialData
      }
    )
  }

  selectedTreeNodeID: string
  selectTreeNode(node: DynamicFlatNode) {
    this.selectedTreeNodeID = node.info.id
    this.treeMarketPlaceService.categorySelected$.next(node.info)
  }
}
