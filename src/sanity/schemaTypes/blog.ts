export const blogs = {
    name : "blogs",
    title : 'Blogs', 
    type: "document",
    fields: [
        {
            name: 'title',
            title: 'Title',
            type:'string',
        },
        {
            name: 'description',
            title: 'Description',
            type:'string',
        },
        {
            name : "publishedAt" , 
            title : "Published At" ,
            type : "datetime"
        },
        {
            name : "image",
            title : "Image",
            type : "image",
            options : {
                hotspot : true
            }
        },
        {
            name : "tags",
            title : "Tags",
            type : "array",
            of : [{type : "string"}]
        }
        // {
        //     name : "author" , 
        //     title : "Author" ,
        //     type : "reference",
        //     to : {
        //         type : "authors"
        //     }
        // }
        
    
    ]
}