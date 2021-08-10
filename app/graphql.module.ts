import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
// Apollo
import { Apollo } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";
import { InMemoryCache } from "@apollo/client/core";

const uri = "https://1d1f27a3b446.ngrok.io/graphql/";

@NgModule({
  exports: [HttpClientModule]
})
export class GraphQLModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    // create Apollo
    apollo.create({
      link: httpLink.create({ uri }),
      cache: new InMemoryCache()
    });
  }
}
