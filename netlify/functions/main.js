export const config = {
schedule: "0 23 * * *"
};

export default async (req, context) => {
// Your logic for run.js goes here
console.log("Scheduled task executed");
  fetch("ntfy.sh/jonash_test", {method:"POST",body:"hepp"})
};
