const ItemListContainer = (props) => {
	return (
<div class="carousel rounded-box bg-emerald-900 p-2 w-full">
  <div class="carousel-item p-2">
        <div class="bg-white rounded-lg border shadow-md overflow-hidden">
            <img class="h-56 lg:h-60 object-cover" src="https://api.lorem.space/image/pizza?w=400&h=300&hash=8B7BCDC2" alt="" />
            <div class="p-3">
                <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
                {props.novedad1}
                </h3>
                <button className="btn bg-emerald-900 btn-block text-lg text-orange-100 hover:text-white hover:bg-red-800">Añadir al carrito</button>
            </div>
        </div>
  </div> 
  <div class="carousel-item p-2">
    <div class="bg-white rounded-lg border shadow-md overflow-hidden">
              <img class="h-56 lg:h-60 object-cover" src="https://api.lorem.space/image/pizza?w=400&h=300&hash=500B67FB" alt="" />
              <div class="p-3">
                  <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
                  {props.novedad2}
                  </h3>
                  <button className="btn bg-emerald-900 btn-block text-lg text-orange-100 hover:text-white hover:bg-red-800">Añadir al carrito</button>
              </div>
          </div>
  </div> 
  <div class="carousel-item p-2">
    <div class="bg-white rounded-lg border shadow-md overflow-hidden">
              <img class="h-56 lg:h-60 object-cover" src="https://api.lorem.space/image/pizza?w=400&h=300&hash=A89D0DE6" alt="" />
              <div class="p-3">
                  <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
                  {props.novedad3}
                  </h3>
                  <button className="btn bg-emerald-900 btn-block text-lg text-orange-100 hover:text-white hover:bg-red-800">Añadir al carrito</button>
              </div>
          </div>
  </div> 
  <div class="carousel-item p-2">
    <div class="bg-white rounded-lg border shadow-md overflow-hidden">
              <img class="h-56 lg:h-60 object-cover" src="https://api.lorem.space/image/pizza?w=400&h=300&hash=225E6693" alt="" />
              <div class="p-3">
                  <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
                  {props.novedad4}
                  </h3>
                  <button className="btn bg-emerald-900 btn-block text-lg text-orange-100 hover:text-white hover:bg-red-800">Añadir al carrito</button>
              </div>
          </div>
  </div> 
  <div class="carousel-item p-2">
  <div class="bg-white rounded-lg border shadow-md overflow-hidden">
              <img class="h-56 lg:h-60 object-cover" src="https://api.lorem.space/image/pizza?w=400&h=300&hash=9D9539E7" alt="" />
              <div class="p-3">
                  <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
                  {props.novedad5}
                  </h3>
                  <button className="btn bg-emerald-900 btn-block text-lg text-orange-100 hover:text-white hover:bg-red-800">Añadir al carrito</button>
              </div>
          </div>
  </div> 
  <div class="carousel-item p-2">
  <div class="bg-white rounded-lg border shadow-md overflow-hidden">
              <img class="h-56 lg:h-60 object-cover" src="https://api.lorem.space/image/pizza?w=400&h=300&hash=B0E33EF4" alt="" />
              <div class="p-3">
                  <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
                  {props.novedad6}
                  </h3>
                  <button className="btn bg-emerald-900 btn-block text-lg text-orange-100 hover:text-white hover:bg-red-800">Añadir al carrito</button>
              </div>
          </div>
  </div> 
  <div class="carousel-item p-2">
  <div class="bg-white rounded-lg border shadow-md overflow-hidden">
              <img class="h-56 lg:h-60 object-cover" src="https://api.lorem.space/image/pizza?w=400&h=300&hash=7F5AE56A" alt="" />
              <div class="p-3">
                  <h3 class="font-semibold text-xl leading-6 text-gray-700 my-2">
                  {props.novedad7}
                  </h3>
                  <button className="btn bg-emerald-900 btn-block text-lg text-orange-100 hover:text-white hover:bg-red-800">Añadir al carrito</button>
              </div>
          </div>
  </div>
</div>
	);
};
export default ItemListContainer;
