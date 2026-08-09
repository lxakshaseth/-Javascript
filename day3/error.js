try {
    // Code that might produce an error
    const result = 10 / 0;

    console.log(result);
} catch (error) {
    // This block runs if an error occurs
    console.log("Something went wrong!");
    console.log(error.message);
}