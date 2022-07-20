import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://scontent.fccu27-1.fna.fbcdn.net/v/t1.6435-9/79370222_1071308199869319_5015558831405531136_n.jpg?stp=dst-jpg_p640x640&_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=81nq_3rQRFIAX81Bat-&_nc_ht=scontent.fccu27-1.fna&oh=00_AT_KK1FubYskHhRh-UFy0sjKKYlBuuBKiK2K-91Sgs0u7w&oe=62C99F6D"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Akash Biswas</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">devilakashbiswas@gmail.com@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91 6294392294</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Tarulia first lane near Dmarn Villa,chandiberia krishnapur-keshtopur
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;