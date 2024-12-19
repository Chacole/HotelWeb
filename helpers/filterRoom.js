module.exports = (query) => {
    
    let filterStatus = [
      {
        name: "Tất cả",
        status: "",
        class: ""
      },
      {
        name: "Có sẵn",
        status: "Available",
        class: ""
      },
      {
        name: "đã đặt phòng",
        status: "Booked",
        class: ""
      },
      {
        name: "đã bảo trì",
        status: "Maintainance",
        class: ""
      }
    ];
  
    if(query.status) {
      const index = filterStatus.findIndex(item => item.status == query.status);
      filterStatus[index].class="confirm";
    } else {
      const index = filterStatus.findIndex(item => item.status == "");
      filterStatus[index].class="confirm";
    }
  
    return filterStatus;
  }