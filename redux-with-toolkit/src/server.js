import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
      environment,
    routes() {
        this.namespace = "api"  
        this.get("/updateCounter", () => {
            return 34
        }, {
            timing:2000
        })
      },
    })
  
    return server
}