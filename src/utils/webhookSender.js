const axios = require("axios");

exports.sendArtifactWebhook = async (artifact) => {
  try {
    await axios.post(
      "https://webhook.site/c46fff74-01ce-4d65-8c90-0d3fef42a302",
      {
        id: artifact._id,
        title: artifact.title,
        createdAt: artifact.createdAt,
      },
    );

    console.log("✅ Webhook sent successfully");
  } catch (err) {
    console.log("❌ Webhook failed:", err.message);
  }
};