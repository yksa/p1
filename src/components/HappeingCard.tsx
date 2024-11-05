import { IoMdTime } from "react-icons/io";

type TCard = {
  imgUrl: string;
  title: string;
  description?: string;
  createdAt: string;
  creator?: string;
};

type Props = {
  cards: TCard[];
};

const HappeingCard = ({ cards }: Props) => {
  return (
    <div className="flex gap-4">
      <div className="flex-[2] flex-col gap-4 flex">
        <BigCard {...cards[0]} />
        <BigCard {...cards[1]} />
      </div>

      <div className="flex-1 h-full flex-col gap-2  flex">
        <SmallCard
          imgUrl={cards[2].imgUrl}
          title={cards[2].title}
          createdAt={cards[2].createdAt}
          creator="John Doe"
        />
        <SmallCard
          imgUrl={cards[3].imgUrl}
          title={cards[3].title}
          createdAt={cards[3].createdAt}
          creator="John Doe"
        />
        <SmallCard
          imgUrl={cards[4].imgUrl}
          title={cards[4].title}
          createdAt={cards[4].createdAt}
          creator="John Doe"
        />
      </div>
    </div>
  );
};

const BigCard = ({ imgUrl, title, description, createdAt }: TCard) => {
  return (
    <div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
      }}
      className="w-full flex flex-col justify-end px-8 pb-4 gap-1 rounded flex-1 h-[300px]"
    >
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="text-gray-200 text-sm line-clamp-2">
        {description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Id suscipit consectetur explicabo quo? At, expedita. Necessitatibus
        tempore, enim eos ab ducimus, ex ea assumenda eveniet quod repudiandae
        consequatur harum repellendus?
      </p>
      <div className="flex items-center text-gray-200">
        <IoMdTime className="mr-2" />
        <span className="text-xs">{createdAt}</span>
      </div>
    </div>
  );
};

const SmallCard = ({ imgUrl, title, createdAt, creator }: TCard) => {
  return (
    <div className="flex-1 flex flex-col">
      <img
        src={imgUrl}
        alt="Trending Image"
        className="w-full rounded-md h-40"
      />
      <h4 className="mt-2 text-lg font-semibold">{title}</h4>
      <div className="flex items-center mt-1 text-gray-400">
        <IoMdTime className="mr-2" />
        <span className="text-sm">{createdAt}</span>
        {creator && (
          <span className="text-sm">
            &nbsp;by <span className="underline">{creator}</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default HappeingCard;
