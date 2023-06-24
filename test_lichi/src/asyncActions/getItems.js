

export const fetchItems = (limit, page, type) => {
    return function (dispatch) {
        fetch('https://api.lichi.com/category/get_category_product_list?' + new URLSearchParams({
            category: 'clothes',
            lang: 1,
            shop: 2,
            limit: limit,
            page: page
            }))
            .then(response => response.json())
            .then((data) => {
                const data_array = data.api_data.aProduct
                let result_array = []
                for (let i=0; i<data_array.length; i++){
                    const one_element = {
                        id: i + (page-1)*30,
                        visibility: false,
                        name: data_array[i].name,
                        article: data_array[i].article,
                        price: data_array[i].original_price + data_array[i].currency.postfix,
                        description: data_array[i].descriptions.html,
                        img_link: Object.values(data_array[i].photos[0].thumbs)[0]
                    }
                    result_array.push(one_element)
                }
                dispatch({type: "INSERT_ITEMS", payload: result_array})
            })
            // .then(json => console.log(json))
            // .then(json => dispatch(({type: "ADD_MANY_DAYS", json})))
    }
}
