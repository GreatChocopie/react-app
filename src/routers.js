import {allCards} from "./pages/allCards";
import {favouritesCards} from "./pages/allCards";
import { Switch, Route, Redirect } from "react-router";



export const useRouters =() => {
    return (
        <Switch>
            <Route path="/all" exact>
                <allCards />
            </Route>
<Redirect to="/allCards" exact/>
        </Switch>
    )
}

export const useRouters =() => {
    return (
        <Switch>
            <Route path="/favourites" exact>
                <avouritesCards />
            </Route>
<Redirect to="/avouritesCards" exact/>
        </Switch>
    )
}