const config = {
    server: {
        port: 3333,
    },
    db: {
        type: 'mongodb', // 'postgres
        uri: "mongodb://127.0.0.1:27017/todo?retryWrites=true&w=majority"
    }
}
  
export default config;