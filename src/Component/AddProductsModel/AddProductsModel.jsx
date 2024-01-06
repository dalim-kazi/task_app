import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { AddToProductsAsync, GetAllProductsAsync } from '../../Feature/Action/ProductsAction/ProductsAction';

const AddProductsModel = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit, formState: { errors }, register, reset } = useForm();
  const [uploading, setUploading] = useState(false);
  const imgApi = import.meta.env.VITE_IMGBBAPI;

  useEffect(() => {
    reset();
  }, [reset]);

  const onSubmit = async (data) => {
    try {
      setUploading(true);

      const formData = new FormData();
      formData.append('image', data.photo[0]);
    //  imgbb api cell
      const imgBbResponse = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgApi}`,
        formData
      );

      if (imgBbResponse.status === 200) {
        const newProduct = {
          Name: data.name,
          Price: parseFloat(data.price),
          ImageUrl: imgBbResponse.data.data.url,
          IsRecommended: data.isRecommended,
          IsPopular: data.isPopular,
        };
        console.log(newProduct)
        
        // add products
        await Promise.all([
          dispatch(AddToProductsAsync(newProduct)),
          dispatch(GetAllProductsAsync()),
        ]);
      } else {
        throw new Error(imgBbResponse.status)
      }
    } catch (error) {
      throw new Error(error.message)
    } finally {
      setUploading(false);
    }
  };

  return (
    <dialog id="add-products" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <div className="container mx-auto p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Product Name:</label>
              <Controller
                name="name"
                control={control}
                rules={{ required: 'Product Name is required' }}
                render={({ field }) => (
                  <>
                    <input type="text" id="name" {...field} className="w-full p-2 border rounded focus:outline-none" />
                    {errors.name && <div className="text-red-500 text-sm">{errors.name.message}</div>}
                  </>
                )}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block text-sm font-semibold mb-2">Product Price:</label>
              <Controller
                name="price"
                control={control}
                rules={{
                  required: 'Product Price is required',
                  pattern: {
                    value: /^\d+(\.\d{1,2})?$/,
                    message: 'Invalid price format',
                  },
                }}
                render={({ field }) => (
                  <>
                    <input type="text" id="price" {...field} className="w-full p-2 border rounded focus:outline-none" />
                    {errors.price && <div className="text-red-500 text-sm">{errors.price.message}</div>}
                  </>
                )}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="photo" className="block text-sm font-semibold mb-2">Product Photo URL:</label>
              <input
                type="file"
                id="photo"
                {...register('photo', { required: 'Product Photo URL is required' })}
                className="w-full p-2 border rounded focus:outline-none"
              />
              {errors.photo && <div className="text-red-500 text-sm">{errors.photo.message}</div>}
            </div>
            <div className='flex justify-between items-center'>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Is Popular:</label>
                <Controller
                  name="isPopular"
                  defaultValue={false}
                  control={control}
                  render={({ field }) => (
                    <input type="checkbox" id="isPopular" {...field} />
                  )}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Is Recommended:</label>
                <Controller
                  name="isRecommended"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <input type="checkbox" id="isRecommended" {...field} />
                  )}
                />
              </div>
            </div>

            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full" disabled={uploading}>
              {uploading ? 'Uploading...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default AddProductsModel;