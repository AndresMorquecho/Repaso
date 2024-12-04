export const getAllPostsService = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((respose) => {
      return respose.json();
    })
    .then((json) => {
      console.log(json);
    });
};

/*
export const createPostService = (post, fnExito) => {
  const conf = {
    method: "POST",
    body: JSON.stringify({
      title: post.title,
      body: post.body,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json",
    },
  };

  fetch('https://jsonplaceholder.typicode.com/posts', conf).then((respose)=>{return respose.json()})
.then((json)=>{console.log(json); fnExito();})

};
*/

export const updatePostService = ()=>{

    const conf = {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'mensaje final',
            body: 'hasta la vista baby',
            userId: 1

        }),
        headers:{
            "Content-type": "application/json",
        },
    };

    fetch('https://jsonplaceholder.typicode.com/posts/1',conf).then((respose)=>{return respose.json()}).then((json)=>{console.log(json)})

} 

export const getByUserIdService =()=>{


    fetch('https://jsonplaceholder.typicode.com/posts?userId=1').then((response)=>{return response.json()}).then((json)=>{console.log(json)})

}

export const getFakeStoreApi =()=>{
  fetch('https://fakestoreapi.com/products/1')
  .then(res=>res.json())
  .then(json=>console.log(json))
}

export const PostFakeStoreApi =()=>{

  const conf = {

    method: 'POST',
    body: JSON.stringify({
      id: 1,
      title: 'Nuevo producto',
      price: 23.4,
      category: "men's",
      description: 'Descripcion del nuevo producto',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'

    }),
    headers:{
      "Content-type": "application/json",
    }

  }

  fetch('https://fakestoreapi.com/products',conf).then((response)=>{return response.json()}).then((json)=>{console.log(json)})

}

export const PutFakeStoreApi =()=>{

  const conf = {

    method: 'PUT',
    body: JSON.stringify({

      title: 'Producto editado',
      price: 50,
      category: "men's",
      description: 'Descripcion del producto editado',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'      
    }),
    headers:{
      "Content-type": "application/json",
    }
  }

  fetch('https://fakestoreapi.com/products/1', conf).then((response)=>{return response.json()}).then((json)=>{console.log(json)})
}


export const getProveedores = ()=>{

  fetch('http://192.168.1.11:8080/inventarios/rest/proveedores/buscar/Juan').
  then((response)=>{return response.json()}).
  then((json)=>{console.log(json)})



}
export const createPostService = (post, fnExito) => {
  const conf = {
    method: 'POST',
    body: JSON.stringify({
      codigoTipoDoc: post.title,
      descripcion: post.body
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }


  fetch('http://192.168.1.7:8080/inventarios/rest/tiposdocumento/create', conf)
  .then((response) => {
    return response.text();
  })
  .then((json) => {
    console.log(json);
    fnExito();
  })

}
