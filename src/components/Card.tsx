import { IoMdTime } from "react-icons/io";

type Props = {
  imgUrl: string;
  title: string;
  description?: string;
  createdAt: string;
  creator?: string;
};
const Card = ({ imgUrl, title, description, createdAt, creator }: Props) => {
  return (
    <div className="min-w-[250px] bg-white rounded-lg shadow-lg p-4">
      <img
        src={imgUrl}
        alt="Trending Image"
        className="w-full rounded-md h-44"
      />
      <h4 className="mt-4 text-lg font-semibold">{title}</h4>
      {description && (
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Id suscipit consectetur explicabo quo? At, expedita. Necessitatibus
          tempore, enim eos ab ducimus, ex ea assumenda eveniet quod repudiandae
          consequatur harum repellendus?
        </p>
      )}
      <div className="flex items-center mt-4">
        <IoMdTime className="text-gray-600 mr-2" />
        <span className="text-gray-600 text-sm">{createdAt}</span>
        {creator && (
          <span className="text-gray-600 text-sm">&nbsp;by {creator}</span>
        )}
      </div>
    </div>
  );
};

export default Card;
