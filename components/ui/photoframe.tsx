interface PhotoFrameProps {
  imageUrl: string;
}

const PhotoFrame: React.FC<PhotoFrameProps> = ({ imageUrl }) => {
  return (
    <div>
      <div className="h-[179px] w-[190px] bg-gray-800 mt-[40px] ml-6 rounded-3xl">
        <img
          className="object-cover h-[179px] w-[190px] rounded-3xl"
          src={
            imageUrl ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXGqMD1NqPFmQse1n00n-xl82DIxdweEHL6g&s"
          }
          alt="Photo"
        />
      </div>
    </div>
  );
};

export default PhotoFrame;
