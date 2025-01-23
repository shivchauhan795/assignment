import React, { useEffect } from "react";

const AdminPanel = () => {
    useEffect(() => {
        const fetch = async () => {
            try {
                const response = fetch(`${backendURL}api/admin`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = response.json();
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
    })
    return (
        <div className="pt-20">
            <div className="text-center text-xl font-bold">
                Welcome Admin!!
            </div>
            <div className="text-center pt-10">
                <div>
                    Total Website Visit: 0
                </div>
                <div>
                    Form Submission: 0
                </div>
                <div>
                    Blog Engagement: 0
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
