import { memo } from "react";
import { Link } from "react-router-dom";

function PostCard({ pageId, event, location, date, image }) {
    return (
        <Link
            to={`/${pageId}`}
            className="flex flex-col gap-2"
        >
            <img
                src={image || "https://hips.hearstapps.com/hmg-prod/images/logan-armstrong-hvhfqhdyciu-unsplash-1-1606122043.jpg?crop=0.66640625xw:1xh;center,top&resize=640:*"}
                alt={`Foto ${event}`}
                className="rounded relative"
            />
            <h3 className="font-bold text-xl">{event}</h3>
            <p>📍 {location}</p>
            <p className="absolute self-end mt-2 me-2 bg-white py-1.5 px-3 rounded-full shadow shadow-gray-500">📅 {date}</p>
        </Link>
    )
};

export default memo(PostCard);