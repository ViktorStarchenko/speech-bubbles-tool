import Main from "../components/main/main";
import Tools from "../components/Tools/Tools";
import Preview from "../components/Preview/Preview";
import ImageForm from "../components/ImageForm/ImageForm";
import ContentList from "../components/contentList/ContentList";
import Info from "../components/Info/Info";


export default function Home() {
  return (
      <>
          <Main>
              <Preview />
              <Tools>
                  <ImageForm />
                  <ContentList />
              </Tools>
          </Main>
          <Info />
      </>
  );
}
