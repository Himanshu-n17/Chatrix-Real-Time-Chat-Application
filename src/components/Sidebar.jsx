import React from "react";
import { Users } from "lucide-react";

const Sidebar = () => {
  const members = [
    { id: 1, name: "Himanshu Nayak", status: "online" },
    { id: 2, name: "Pritam Samantara", status: "online" },
    { id: 3, name: "Rahul Kar", status: "offline" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">
          <Users size={20} />
          Room-17
        </h2>
      </div>
      <div className="members-list">
        <h3 className="members-title">Members ({members.length})</h3>
        <div>
          {members.map((member) => (
            <div key={member.id} className="member-item">
              <div
                className={`status-indicator ${
                  member.status === "online"
                    ? "status-online"
                    : "status-offline"
                }`}
              />
              <span className="member-name">{member.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
