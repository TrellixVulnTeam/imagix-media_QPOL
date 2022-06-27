const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())




app.post('/images/upload', async (req, res)=>{
    const file = req.files.file 
    const filename = file.name

    file.mv(`__dirname${filename}`, (error)=>{
        if (error) {
            console.log(error);
            res.status(500).send({message: "Image file upload fail"})
        }else{
            res.status(200).send({message: "Image file uploaded succesfully"})
    
        }
    })

    const image = new image({imageName: filename, imagePath: __dirname + filename})

    try {
        await image.save()
    } catch (error) {
        res.status(300).send(error)
        console.log(error);
    }
})

app.get('images/getimages', async(req,res)=> {
    images.find({},(error,result)=>{
        if (error) {
            res.send(error)
        }
        res.send(result)
    })
})


const port = proccess.env.PORT || 4000
app.listen(prompt, (error)=>{
    if (error) {
        console.log(error);
    }else{
        console.log(`App is running on port ${port}`);
    }
})