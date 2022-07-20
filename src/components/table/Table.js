import './table.scss'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {

    const rows = [
        {
            id : 1143155,
            product:"Apple MacBook Air",
            img:"https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_UY218_.jpg",
            customer: "Akash Biswas",
            date: "7 June",
            amount: "₹ 200,106",
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id : 1143156,
            product:"LG Gram 17Z95P",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtudXU3JINgSly8rxxgETtJs0R_cOq4t0mWx_Ep-xr0UyTPc3T",
            customer: "Rajarshi Lodh",
            date: "6 June",
            amount: "₹ 125,990",
            method: "Online",
            status: "Pending",
        },
        {
            id : 1143157,
            product:"ASUS ROG Strix G17 ",
            img:"https://m.media-amazon.com/images/I/51n0NEZkPLL._AC_UY218_.jpg",
            customer: "Abhijit Dhan",
            date: "5 June",
            amount: "₹ 62,990",
            method: "Online",
            status: "Approved",
        },
        {
            id : 1143158,
            product:"HP OMEN 16.1",
            img:"https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Nilanjit Chakraborthy",
            date: "3 June",
            amount: "₹ 92,790",
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id : 1143159,
            product: "HP Pavilion 15.6",
            img:"https://m.media-amazon.com/images/I/719UP4JpbmL._AC_UY218_.jpg",
            customer: "Aniket Mondal",
            date: "3 June",
            amount: "₹ 58,990",
            method: "Cash on Delivery",
            status: "Pending",
        },
    ]

    return (
        <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell className="tableCell">Tracking ID</TableCell>
                <TableCell className="tableCell">Product</TableCell>
                <TableCell className="tableCell">Customer</TableCell>
                <TableCell className="tableCell">Date</TableCell>
                <TableCell className="tableCell">Amount</TableCell>
                <TableCell className="tableCell">Payment Method</TableCell>
                <TableCell className="tableCell">Status</TableCell>
            </TableRow>
            </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default List;