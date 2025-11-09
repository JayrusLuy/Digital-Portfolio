async function Emailme(email, subject, body) {
  try {
    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, subject, body }),
    });

    return await response.json();
  } catch (error) {
    console.error("Error sending email:", error);
    return { message: "Failed to send email" };
  }
}

export default Emailme;
