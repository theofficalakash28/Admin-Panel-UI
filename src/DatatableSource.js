export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Akash Biswas",
      img: "https://scontent.fccu27-2.fna.fbcdn.net/v/t1.6435-1/80794736_1090550214611784_2666528203748671488_n.jpg?stp=dst-jpg_p160x160&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Xok7a_XB6sIAX_bATGh&_nc_ht=scontent.fccu27-2.fna&oh=00_AT_mqGRErxxwg8YwHN1k6vjkuZ92OHDPuDqwLL9zcmiEyg&oe=62C67130",
      status: "active",
      email: "devilakashbiswas@gmail.com",
      age: 20,
    },
    {
      id: 2,
      username: "Nilanjit Chakraborty",
      img: "https://scontent.fccu27-1.fna.fbcdn.net/v/t39.30808-6/245600782_1251477591982922_1138563425637966521_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_r64eOCuR6oAX95QlHm&_nc_ht=scontent.fccu27-1.fna&oh=00_AT-qqmgoIWt-v7JaB0TAQ371cVBnOHSELIlhmtjrLt1aLA&oe=62A6942D",
      email: "NilanjitC@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 3,
      username: "Avijit Dhan",
      img: "https://scontent.fccu27-2.fna.fbcdn.net/v/t1.6435-9/79240478_1243672879162778_5084570546306285568_n.jpg?stp=dst-jpg_p640x640&_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=jMRqCMcJpw4AX8ofix2&_nc_ht=scontent.fccu27-2.fna&oh=00_AT9rhxeLNtUck0-BfMC4FFHSE4owP_CSD2mrAPvbVE-IuA&oe=62C80D80",
      email: "AbhijitD@gmail.com",
      status: "pending",
      age: 22,
    },
    {
      id: 4,
      username: "Partha Sarathi",
      img: "https://scontent.fccu27-1.fna.fbcdn.net/v/t1.6435-9/146612879_790514518477073_4059443878214646122_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Fg0lOpeFMncAX-qEvaC&_nc_ht=scontent.fccu27-1.fna&oh=00_AT9eB0g52eZ-JmZMX95MWrfTGyWA4xBic1nHyL3SpeD2Kg&oe=62C7ADB5",
      email: "iPSP@gmail.com",
      status: "active",
      age: 21,
    },
    {
      id: 5,
      username: "Aniket Mandal",
      img: "https://scontent.fccu27-2.fna.fbcdn.net/v/t1.6435-9/134210691_1063905547514896_3592377419208731085_n.jpg?stp=dst-jpg_p206x206&_nc_cat=102&ccb=1-7&_nc_sid=da31f3&_nc_ohc=RAVI8Ia0NFsAX86pq7o&tn=uRrU4QHhsfESK66B&_nc_ht=scontent.fccu27-2.fna&oh=00_AT-Zb72rWTaRfDPe5Sp0yNZ18pKrOgpIklw7SbORmYRSKg&oe=62C629D6",
      email: "AniketM@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Niladri Sen",
      img: "https://scontent.fccu27-2.fna.fbcdn.net/v/t39.30808-6/285822786_581541166686874_4049730523523751864_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eFBXyHj6MAYAX801ECc&tn=uRrU4QHhsfESK66B&_nc_ht=scontent.fccu27-2.fna&oh=00_AT8NLW9Bg5yB1wccUx_UvhfIsy25t1YpiOaaZ_VwyZNwBw&oe=62A6E9F5",
      email: "NiladriS@gmail.com",
      status: "active",
      age: 21,
    },
    {
      id: 7,
      username: "Sathi Banerjee",
      img: "https://pps.whatsapp.net/v/t61.24694-24/213232225_1874661932731917_6608544684645551878_n.jpg?ccb=11-4&oh=01_AVzSme-WGIP_yE5gRP_3RF1D4WfCHWdYg0HGMSpY2IsrAg&oe=62B0DD91",
      email: "SathiB@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 8,
      username: "Sachin Santra",
      img: "https://scontent.fccu27-2.fna.fbcdn.net/v/t1.6435-9/75199785_698270873916777_5055034983924629504_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=I1govb_eDTQAX9ZJc3i&_nc_ht=scontent.fccu27-2.fna&oh=00_AT-yg6I9AvRXyHpId4dTlH8eMp6k_9_QcAALov_OzILCLw&oe=62C7F58B",
      email: "PuchuSantra@gmail.com",
      status: "active",
      age: 22,
    },
    {
      id: 9,
      username: "Rameswar Banerjee",
      img: "https://scontent.fccu27-2.fna.fbcdn.net/v/t1.6435-9/123030060_1690988207723356_3449998702102670365_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=SZhOmstTGyEAX_CSDfV&_nc_ht=scontent.fccu27-2.fna&oh=00_AT-iVMqVn3rLXjc5tHEiCVSDNKZ5571YASv_d7iNQQdlqA&oe=62C741ED",
      email: "RamuB@gmail.com",
      status: "pending",
      age: 23,
    },
    {
      id: 10,
      username: "Rajarshi Lodh",
      img: "https://scontent.fccu27-1.fna.fbcdn.net/v/t39.30808-6/274329830_1090786935035947_8978905674113065972_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QeWlK6W-B0cAX-7BqQ2&_nc_ht=scontent.fccu27-1.fna&oh=00_AT_LdrnsSIuHTjmbQt_AUyx2wMG2QDwLfSDiaRh0yyNQlQ&oe=62A6D052",
      email: "RajarshiL@gmail.com",
      status: "active",
      age: 21,
    },
  ];