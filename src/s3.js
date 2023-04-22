// imageupload-sannu
// us-west-2
// YlXEvvG4H+hphELcDyfFW/IesdLV3ZYOwiLm7GtI
const S3= require('aws-sdk/clients/s3')
const fs= require('fs')
const name='imageupload-sannu'
const region='us-west-2'
const accessKeyId='AKIAS3Q3EJGSTBE7L26N'
const secretAccessKey='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'
const s3=new S3({
 region,
 accessKeyId,
 secretAccessKey
})

 function uploadFile(file){
    const fileStream = fs.createReadStream(file.path)
    console.log('file',fileStream)
    const response = {
        Bucket:name,
        Body:fileStream,
        Key:file.filename
    }
    return s3.upload(response).promise((v)=>{
        console.log('data',v)
    })

}

module.exports=uploadFile