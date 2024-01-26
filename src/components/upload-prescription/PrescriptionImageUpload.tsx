'use client';
import { useUploadImage } from '@/hooks';
import { InputError } from '@/library/ui/InputError';
import { ImageUploadSchema } from '@/services/prescription/types';
import { Spinner } from '@nextui-org/react';
import { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { IconUpload } from '../icons/IconUpload';

type PrescriptionImageUploadProps = {
  onUpload: (imageUrl: string) => void;
  error?: string;
};

export const PrescriptionImageUpload: FC<PrescriptionImageUploadProps> = ({
  onUpload,
  error,
}) => {
  const [imageError, setImageError] = useState({
    status: false,
    message: '',
  });

  const { uploadImage, loadingUploadImage, imageUploaded } = useUploadImage(
    (data) => {
      onUpload(data.message);
    }
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageError({
      status: false,
      message: '',
    });
    const images: FileList | null = event.target.files;

    if (images) {
      const maxSize = 2097152; // approximately 2MB in bytes

      if (images[0]?.size > maxSize) {
        setImageError({
          status: true,
          message: 'Image too large!',
        });
        return;
      }

      // upload the image
      const formData: ImageUploadSchema = new FormData();
      formData.append('image', images[0]);
      uploadImage(formData);
    }
  };

  return (
    <div className='group'>
      <label
        htmlFor='uploadInput'
        className={twMerge(
          'flex w-full flex-col items-center justify-center rounded-lg border border-primaryGreenDark bg-white py-8 shadow-sm group-hover:cursor-pointer',
          loadingUploadImage
            ? 'pointer-events-none cursor-not-allowed opacity-50'
            : null
        )}
      >
        <IconUpload color='success' size={64} />
        <p className='text-body mt-4 max-w-[300px] text-center font-light text-primaryGreenDark'>
          {' '}
          Upload your Prescription: Drag & Drop or Click to Browse
        </p>
        {imageError.status ? (
          <small className='text-danger'>Image too large</small>
        ) : null}
        {imageUploaded ? (
          <small className='text-success'>Uploaded ✅</small>
        ) : null}
        <Spinner
          size='sm'
          className={loadingUploadImage ? 'visible mt-3' : 'invisible mt-3'}
          color='success'
        />
        <input
          onChange={handleFileChange}
          className='sr-only'
          type='file'
          id='uploadInput'
        />
      </label>
      {error ? <InputError message={error} /> : null}
      <div className='relative flex flex-col gap-1.5 px-1 pt-1'></div>
    </div>
  );
};
