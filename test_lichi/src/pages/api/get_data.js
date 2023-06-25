

export default async function handler(req, res) {
console.log(req.arguments)
    const response = await fetch('https://api.lichi.com/category/get_category_product_list?' + new URLSearchParams({
        category: 'clothes',
        lang: 1,
        shop: 2,
        limit: 12, //req.body.limit,
        page: 4, //req.body.page
    }))
    console.log(response.json())
    return res.status(200).json(response.json())
}