import axios from "axios";
import { useRef, useState } from "react";
import ReactCrop, {
  centerCrop,
  convertToPixelCrop,
  makeAspectCrop,
} from "react-image-crop";
import base64ToFormData from "../../../utils/base64ToFormData";
import setCanvasPreview from "../utils/setCanvasPreview";

const ASPECT_RATIO = 1;

export default function ResizeModal({
  imageSrc,
  crop,
  setCrop,
  setResizeModal,
  setPhotoURL,
  MIN_DIMENSION,
}) {
  const imageRef = useRef(null);
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget;
    const cropWidthInPercent = (MIN_DIMENSION / width) * 100;

    const _crop = makeAspectCrop(
      {
        unit: "%",
        width: cropWidthInPercent,
      },
      ASPECT_RATIO,
      width,
      height
    );
    const centeredCrop = centerCrop(_crop, width, height);
    setCrop(crop || centeredCrop);
  };

  const handleCrop = async () => {
    setIsLoading(true);

    setCanvasPreview(
      imageRef.current,
      canvasRef.current,
      convertToPixelCrop(crop, imageRef.current.width, imageRef.current.height)
    );

    const dataURL = canvasRef.current.toDataURL();

    let response1 = axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      base64ToFormData(dataURL)
    );

    let response2 = axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      base64ToFormData(imageSrc)
    );

    const response = await Promise.all([response1, response2]);

    if (response[0].status === 200) {
      setPhotoURL(dataURL);
      setResizeModal(false);
      setIsLoading(false);
    }

    console.log(response);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-20">
      <div className="mx-4 bg-white p-4 rounded-md">
        {imageSrc && (
          <div className="flex flex-col justify-center items-center gap-5">
            <ReactCrop
              crop={crop}
              // circularCrop
              keepSelection
              aspect={ASPECT_RATIO}
              minWidth={MIN_DIMENSION}
              onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
            >
              <img
                ref={imageRef}
                src={imageSrc}
                crossOrigin="anonymous"
                alt="Image Upload"
                style={{
                  maxHeight: "70vh",
                }}
                onLoad={onImageLoad}
              />
            </ReactCrop>
            <div className="space-x-3">
              <button
                className="bg-primary px-3 py-1 rounded-md text-white"
                onClick={() => setResizeModal(false)}
              >
                Cancel
              </button>
              <button
                className={`bg-primary px-3 py-1 rounded-md text-white ${
                  isLoading && "bg-gray-500"
                }`}
                onClick={handleCrop}
                disabled={isLoading}
              >
                Crop Image
              </button>
            </div>
            {crop && (
              <canvas
                ref={canvasRef}
                style={{
                  display: "none",
                  border: "1px solid black",
                  objectFit: "contain",
                  width: 200,
                  height: 200,
                }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
