import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Post } from './post';
import { PostService } from './post.service';

@Injectable()
export class PostsResolveService implements Resolve<Post[]> {

  constructor(private _postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Post[]> {

      if(route.url[1] ? route.url[1].path === 'users' : false){
      return this._postService.getUserPosts(route.params.userId);
    
      }
      else if (route.url[1] ? route.url[1].path === 'categories' : false){
        console.log(route.params)
        return this._postService.getCategoryPosts(route.params.categoryId);
    }

  
    /*=========================================================================|
    | Red Path                                                                 |
    |==========================================================================|
    | Modifica este Resolve para que, en caso de tener que obtener los posts   |
    | correspondientes a un usuario, llame a la función 'getUserPosts()' del   |
    | servicio PostService. Recuerda mirar en los parámetros de la ruta, a ver |
    | qué encuentras.                                                          |
    |=========================================================================*/

    /*=========================================================================|
    | Yellow Path                                                              |
    |==========================================================================|
    | Modifica este Resolve para que, en caso de tener que obtener los posts   |
    | correspondientes a una categoría, llame a la función 'getCategoryPosts()'|
    | del servicio PostService. Recuerda mirar en los parámetros de la ruta, a |
    | ver qué encuentras.                                                      |
    |=========================================================================*/

    return this._postService.getPosts();
  }

}
