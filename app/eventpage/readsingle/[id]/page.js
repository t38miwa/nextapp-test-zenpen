import Image from "next/image";

const getSingleItem = async (id) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/eventpage/readsingle/${id}`, { cache: "no-store" });
  const jsonData = await response.json();
  const singleItem = jsonData.singleItem;
  return singleItem;
};

const ReadSingleItem = async (context) => {
  const singleItem = await getSingleItem(context.params.id);
  return (
    <div className="event-container">
      <h2 className="event-title">{singleItem.title}</h2>
      <div className="grid-container-si">
        <div className="image-container">
          <Image src={singleItem.Image} layout="responsive" width={100} height={50} alt="item-image" priority />
        </div>
        <div className="event-details">
          <h3 className="event-keyword">キーワード: {singleItem.keyword}</h3>
          <h3>{singleItem.prefecture}: {singleItem.place}</h3>
          <h3>日時: {singleItem.date}</h3>
          <h3>チーム: {singleItem.team}</h3>
          <p>{singleItem.description}</p>
          <p>主催者メール: {singleItem.email}</p>
        </div>
      </div>
      <div className="registration-form">
        <h3>参加登録</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">名前:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="contact">連絡先:</label>
            <input type="text" id="contact" name="contact" required />
          </div>
          <button type="submit" className="register-button">イベントに参加する</button>
        </form>
      </div>
    </div>
  );
};

export default ReadSingleItem;
