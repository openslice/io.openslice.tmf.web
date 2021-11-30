import {CollectionViewer, SelectionChange} from '@angular/cdk/collections';
import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {BehaviorSubject, merge, Observable, forkJoin} from 'rxjs';
import {map} from 'rxjs/operators';
import { TreeResourceMarketPlaceService } from '../services/tree-resource-market-place.service';
import { ResourceCatalog, ResourceCategory } from 'src/app/openApis/ResourceCatalogManagement/models';
import { ResourceCategoryService } from 'src/app/openApis/ResourceCatalogManagement/services';

export class DynamicFlatNode {
  constructor(public item: string, public level = 1, public expandable = false,
              public info: ResourceCatalog|ResourceCategory,
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
              private _categoryService: ResourceCategoryService) {}

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this._treeControl.expansionModel.onChange.subscribe(change => {
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
      let childrenCategoryRequests: Observable<ResourceCategory>[] = []

      node.info.category.forEach(child => {
        childrenCategoryRequests.push(this._categoryService.retrieveResourceCategory({ id: child.id }))
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
  selector: 'resources-tree-sidenav',
  templateUrl: './tree-sidenav-resources.component.html',
  styleUrls: ['./tree-sidenav-resources.component.scss']
 
})
export class TreeSidenavResourcesComponent {

  constructor(categoryService: ResourceCategoryService, private treeMarketPlaceService: TreeResourceMarketPlaceService) {
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
