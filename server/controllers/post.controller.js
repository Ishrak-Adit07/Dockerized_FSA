import { createDocument, deleteDocument, findDocument, findDocumentByMultipleAttributes, getAllDocuments, updateSingleDocument } from "../database/appwrite.queries";

const createPost = async(req, res)=> {

    const {name, post} = req.body;
    console.log(name, post);

    try {

        if(!name || !post){
            res.status(404).send({success:false, error: "All fields required"});
        }
    
        else{
    
            const postData = {
                name,
                post
            }
            const createPostResponse = await createDocument(process.env.APPWRITE_PRODUCT_COLLECTION_ID, postData);
            if(createPostResponse.success){
                const responsePost = createPostResponse.response.documents[0];
                res.status(201).send({success:true, responsePost});
            }
            else{
                res.status(400).send({success:false, error:"Post is not created, try again later"});
            }
    
        }
        
    } catch (e) {
        console.log(e);
        res.status(400).send({success:false, error:e.message});
    }

}

const deletePost = async(req, res)=>{

    const {name, post} = req.body;

    try {

        if(!name || !post){
            res.status(404).send({success:false, error: "All fields required"});
        }
    
        else{

            const postAttributes = [
                {
                    name: "name",
                    value: name
                },
                {
                    name: "post",
                    value: post
                },
            ];
    
            const exist = await findDocumentByMultipleAttributes(process.env.APPWRITE_POST_COLLECTION_ID, postAttributes);
            if(exist.response.total != 0){
                const deleteProductResponse = await deleteDocument(process.env.APPWRITE_POST_COLLECTION_ID, exist.response.documents[0].$id);
                if(deleteProductResponse.success){
                    res.status(201).send({success:true, message: "Product " + name + " of type " + type + " is deleted"});
                }
                else{
                    res.status(404).send({success:false, message: "Could not delete product, try again later"});
                }
            }
            else{
                res.status(404).send({success:false, message: "Cannot find this product"});
            }
    
        }
        
    } catch (e) {
        console.log(e);
        res.status(400).send({success:false, error:e.message});
    }

}

export { createPost, deletePost }