import { useEffect, useRef } from 'react';

const Upload = ({newProduct,setNewProduct}) => {
  const cloudinaryRef = useRef();
  const widgetRef= useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    
    //this will run when there is connection issue
    if(!window.cloudinary){
        alert('Network Issues Please try later')
    }
    
    widgetRef.current = cloudinaryRef?.current?.createUploadWidget({
      cloudName: `${import.meta.env.VITE_CLOUD_NAME}`,
      uploadPreset: `${import.meta.env.VITE_UPLOAD_PRESET}`
    }, function(error, result) {
        if(result?.event === 'success') {
            setNewProduct(prevProduct => ({
              ...prevProduct,
              images: [
                ...(prevProduct.images || []),
                result.info.secure_url
              ]
            }));
          }
    });
  }, []);

  return (
    <div className='mb-2'>
        <p>Upload image :</p>
        <button className='border bg-green-500 text-white px-4 py-2 rounded-md' onClick={() => widgetRef.current.open()}>
            Upload
        </button>
        <div className='grid grid-cols-3 gap-2 my-3 bg-white rouded-xl w-[75%]'>
        {
            newProduct.images.map((image, index) => (
                <img key={index} src={image} alt='product' className='w-20 h-20 object-cover' />
            ))
        }
        </div>
    </div>
);
};

export default Upload;