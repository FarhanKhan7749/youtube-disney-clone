import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewres";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trendings from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../featuers/movie/movieSlice";
import { selectUserName } from "../featuers/users/userSlice";

const Home = (props) => {
    const dispatch = useDispatch();
    const username = useSelector(selectUserName);

    let recommends = [];
    let newDisney = [];
    let originals = [];
    let trendings = [];

    useEffect(() => {
        db.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                console.log(recommends);
                switch (doc.data().type) {
                    case 'recommend':
                        recommends = [...recommends,{ id: doc.id, ...doc.data() }];
                        break;
                    case 'new':
                        newDisney = [...newDisney,{ id: doc.id, ...doc.data() }];
                        // newDisney.push({ id: doc.id, ...doc.data() });
                        break;
                    case 'trending':
                        trendings = [...trendings,{ id: doc.id, ...doc.data() }];

                        // originals.push({ id: doc.id, ...doc.data() });
                        break;
                    case 'original':
                        originals = [...originals,{ id: doc.id, ...doc.data() }];
                        // trendings.push({ id: doc.id, ...doc.data() });
                        break;
                    default:
                        return null;
                }
            });
        });
        dispatch(setMovies({
            recommends: recommends,
            newDisney: newDisney,
            original: originals,
            trendings: trendings,
        }));
    }, [username]);

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trendings />
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height:calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(2.5vw + 5px);

    &:after{
        background: url('/images/home-background.png') center center/ cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`

export default Home;