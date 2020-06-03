import { Pipe, Injectable, PipeTransform } from "@angular/core";
import shuffle from 'lodash/shuffle';

@Pipe({
  name: 'filterByCatalog'
})
@Injectable()
export class FilterByCatalog implements PipeTransform {
  transform(items: any[], catalogId: string): any[] {  
    if (!items) return []
    return items.filter(item => {
      if (!item.catalogs) return false
      return item.catalogs.map(c => c.id).indexOf(catalogId) >= 0
    })
  }
}

@Pipe({
  name: 'filterByPartner'
})
@Injectable()
export class FilterByPartner implements PipeTransform {
  transform(items: any[], partnerId: string): any[] {  
    if (!items) return []
    return items.filter(item => {
      if (!item.partner) return false
      return item.partner.uid == partnerId
    })
  }
}

@Pipe({
  name: 'removeGoFast'
})
@Injectable()
export class RemoveGoFast implements PipeTransform {
  transform(items: any[], partnerId: string): any[] {  
    if (!items) return []
    return items.filter(item => !item.isGofast)
  }
}

@Pipe({
  name: 'shuffleArray'
})
@Injectable()
export class ShuffleArray implements PipeTransform {
  transform(items: any[], partnerId: string): any[] {  
    if (!items) return []
    return shuffle(items)
  }
}