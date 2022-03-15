import { Injectable } from '@angular/core';

//check Workshop Components @1:50 as this service is not completed
export class StorageService {

  constructor() { }
}

@Injectable()
export class BrowserStorage{
  localStorage = localStorage;
  setItem<T>(key: string, item: T): T{
    this.localStorage.setItem(key, JSON.stringify(item));
    return item;
  }

  getItem<T>(key: string):T{
    let item;
    const tmp = this.localStorage.getItem(key);
    //if(!tmp) {return null;}
    try{
      item = JSON.parse(tmp!);
    } catch{
      item = tmp;
    }
    return item;
  }
}

// @Injectable()
// export class ServerStorage{
//   localStorage = {
//     data: {},
//     setItem<T>(key:string, item: T): void{
//       this.data[key] = item;
//     },
//     getItem<T>(key:string):T{
//       return this.data[key];
//     }
//   };

//   setItem<T>(key: string, item: T): T{
//     this.localStorage.setItem(key, JSON.stringify(item));
//     return item;
//   }

//   getItem<T>(key: string):T{
//     let item;
//     const tmp = this.localStorage.getItem(key) as any;
//     try{
//       item = JSON.parse(tmp);
//     } catch{
//       item = tmp;
//     }
//     return item;
//   }
// }