import about_pic1 from "../assets/about_pic01.png";
import about_pic2 from "../assets/about_pic02.png";
const DetailsAboutCard = () => {
  return (
    <div className="flex flex-row justify-between items-stretch gap-4 ">
      <div className="flex flex-col justify-between items-stretch basis-1/3">
        <div className="object-cover mb-2 w-full">
          <img src={about_pic1} alt="" className="w-full"/>
        </div>
        <h4 className="text-xl lowercase font-bold">mang theo bản sắc, không phải lớp vỏ</h4>
        <p className="text-sm font-light text-justify mt-2 lowercase">
          Tôi tin rằng mỗi người đều có câu chuyện riêng — không cần cố gắng giống ai, chỉ cần trung thực với chính mình. Với tôi, vẻ đẹp không nằm ở bề ngoài, mà ở sự chân thành và cách ta nhìn thế giới. Tôi chọn viết, vì đó là cách tôi đối thoại với bản thân, và cũng là cách tôi học cách yêu thương con người hơn.
        </p>
      </div>
      <div className="flex flex-col justify-around items-stretch basis-2/3">
        <h3 className="text-2xl font-bold mb-2 lowercase">viết để sống thật, không để gây ấn tượng</h3>
        <p className="text-sm font-light text-justify lowercase">
          Tôi không lập blog này để ai đó ngưỡng mộ mình, mà để lưu lại những gì từng khiến tôi thay đổi — những khoảnh khắc nhỏ, những suy nghĩ không kịp nói thành lời, và những câu chuyện có thể chạm đến người khác theo cách giản dị nhất.
        </p>
        <div className="object-cover flex-1 w-full mt-2">
          <img src={about_pic2} alt="" className="w-full"/>
        </div>
      </div>
    </div>
  );
};

export default DetailsAboutCard;
