// import * as DataStore from 'nedb';
const {db} = require('./database');

export default class Repository<T> {

  public dataSource =  db

  //  public dataSource = new DataStore({
  //   inMemoryOnly: true,
  // });

  public save(data: T, model:any): Promise<T> {
    return model.create(data).then((document: any, error: any) => {
      if (error) {
        console.log(error,"error")
        return error
      }
      return document
    })
    // return new Promise((resolve, reject) => {
      // this.dataSource.save(data, (error:any, document:any) => {
      //   if (error) {
      //     console.log(error,"error")
      //     reject(error);
      //   }
      //   resolve(document);
      // });
    // });
  }

  public getById(_id: string,model:any): Promise<any> {
    console.log(_id)
    return model.findById(_id).then((document: any, error: any) => {
      if (error) {
        console.log(error,"error")
        return error   
      }
      return document
    })
  //   return new Promise((resolve, reject) => {
  //     this.dataSource.findOne({ _id }, (error:any, document:any) => {
  //       if (error) {
  //         reject(error);
  //       }

  //       resolve(document);
  //     });
  //   });
  }

  public getAll(model:any): Promise<any[]> {
    return model.find().then((document: any, error: any) => {
      if (error) {
        console.log(error,"error")
        return error
      }
      return document
    })

    // return new Promise((resolve, reject) => {
    //   this.dataSource.find({}, {}, (error:any, documents:any) => {
    //     if (error) {
    //       reject(error);
    //     }

    //     resolve(documents);
    //   });
    // });
  }

  public updateById(_id: string, data: T, model:any): Promise<T> {
    return model.update({_id:_id},data).then((document: any, error: any) => {
      if (error) {
        console.log(error,"error")
        return error
      }
      return this.getById(_id, model).then((value: any) => value);
      // return document
    })
    // return new Promise((resolve, reject) => {
    //   this.dataSource.update({ _id }, data, {}, (error:any )=> {
    //     if (error) {
    //       reject(error);
    //     }
        
    //     this.getById(_id).then((value: any) => resolve(value));
    //   });
    // });
  }

  public deleteById(_id: string,model:any): Promise<string> {
    return model.remove( {_id:_id}).then((document: any, error: any) => {
      if (error) {
        console.log(error,"error")
        return error
      }
      return document
    })
  //   return new Promise((resolve, reject) => {
  //     this.dataSource.remove({ _id }, (error:any) => {
  //       if (error) {
  //         reject(error);
  //       }

  //       resolve(_id);
  //     });
  //   });
  }
}
