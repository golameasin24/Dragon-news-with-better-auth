// import { betterAuth } from "better-auth";
// import { mongodbAdapter } from "@better-auth/mongo-adapter";
// import { MongoClient } from "mongodb";

import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const client = new MongoClient(process.env.MONGODB_URI);
console.log(process.env.MONGODB_URI);

await client.connect();

const db = client.db("dragonNews");

// export const auth = betterAuth({
//   database: mongodbAdapter(db),
//   emailAndPassword: {
//     enabled: true,
//   },

//   socialProviders: {
//     google: {
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     },
//   },

//   socialProviders: {
//     github: {
//       clientId: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//     },
//   },
// });

export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: {
    enabled: true,
  },
  // দুটি সোশ্যাল প্রোভাইডার একটিমাত্র socialProviders অবজেক্টের ভেতর থাকবে
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  },
});
