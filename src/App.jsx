import React from "react";
import Card from "./components/Card";

function App() {
  const jobOpenings = [
    {
      brandLogo:
        "https://www.shutterstock.com/image-vector/google-icon-sign-symbol-vector-260nw-2313931759.jpg",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 65, // dollars per hour
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt2A2gxUuygCwnyVZKNiD1kHe32oGYuZrrPg&s",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 70,
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 60,
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5rIxFRNX2QZlnQidGjE75yAg9jR4Jhy3Jgw&s",
      companyName: "Apple",
      datePosted: "10 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 85,
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "3 weeks ago",
      post: "Platform Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 95,
      location: "Remote",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png",
      companyName: "Microsoft",
      datePosted: "6 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 75,
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://play-lh.googleusercontent.com/WTGDz8M2gRie-UPC1eFZ321-RavuXFhKlcvxHp0uVEDN0UrWfCMwU9uMvuEE98H3VtZG",
      companyName: "Uber",
      datePosted: "4 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 68,
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://yt3.googleusercontent.com/1236ePdfsipfwgiNT9CQ9dDU9xYkpbh9PkTzrb1nrccbzAVoYvmxxmvgPvv94GPw35-1ZtvUOw=s900-c-k-c0x00ffffff-no-rj",
      companyName: "Airbnb",
      datePosted: "8 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 80,
      location: "Remote",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vvZM_ZeV3PXWQrnV9PU5tPp-axrVNFxVdA&s",
      companyName: "Tesla",
      datePosted: "2 months ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 90,
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5eRETWKNQ0IuSETVDffHht0BpBthJtTH9Fg&s",
      companyName: "Oracle",
      datePosted: "3 days ago",
      post: "Java Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 58,
      location: "Mumbai, India",
    },
  ];

  console.log(jobOpenings);

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              company={elem.companyName}
              datePosted={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              brandLogo={elem.brandLogo}
              pay={elem.pay}
              tag2={elem.tag2}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
