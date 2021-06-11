import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://procrastinafacil.com/wp-content/uploads/2021/01/arnold-schwarzenegger-1024x641.jpg",
      id: 1,
      name: "Tim Hover",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://procrastinafacil.com/wp-content/uploads/2021/01/arnold-schwarzenegger-1024x641.jpg",
      id: 2,
      name: "Ayub Rossi",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://procrastinafacil.com/wp-content/uploads/2021/01/arnold-schwarzenegger-1024x641.jpg",
      id: 3,
      name: "Hamaad Dejesus",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://procrastinafacil.com/wp-content/uploads/2021/01/arnold-schwarzenegger-1024x641.jpg",
      id: 4,
      name: "Eleni Hobbs",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://procrastinafacil.com/wp-content/uploads/2021/01/arnold-schwarzenegger-1024x641.jpg",
      id: 5,
      name: "Elsa Black",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://procrastinafacil.com/wp-content/uploads/2021/01/arnold-schwarzenegger-1024x641.jpg",
      id: 6,
      name: "Kayley Mellor",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://procrastinafacil.com/wp-content/uploads/2021/01/arnold-schwarzenegger-1024x641.jpg",
      id: 7,
      name: "Hasan Mcculloch",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://procrastinafacil.com/wp-content/uploads/2021/01/arnold-schwarzenegger-1024x641.jpg",
      id: 8,
      name: "Autumn Mckee",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://procrastinafacil.com/wp-content/uploads/2021/01/arnold-schwarzenegger-1024x641.jpg",
      id: 9,
      name: "Allen Woodley",
      active: false,
      isOnline: true,
    },
    {
      image: "https://procrastinafacil.com/wp-content/uploads/2021/01/arnold-schwarzenegger-1024x641.jpg",
      id: 10,
      name: "Manpreet David",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
