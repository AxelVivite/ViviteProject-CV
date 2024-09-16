import HeadingThree from "@atoms/typos/headingThree";
import Subheading from "@atoms/typos/subheading";
import Text from "@atoms/typos/text";
import Thematic from "@interfaces/thematic";

interface ThematicListProps {
  thematics: Thematic[];
}

const ThematicList: React.FC<ThematicListProps> = ({ thematics }) => {
  return (
    <ul className="flex max-w-3xl flex-col gap-20">
      {thematics.map((thematic) => (
        <li
          key={thematic.id}
          className="flex flex-col gap-y-8 md:grid md:grid-cols-4 md:items-baseline md:border-l md:border-zinc-700/40 md:pl-6"
        >
          <Subheading className="border-l-2 border-zinc-100 pl-4 text-sm tracking-normal md:border-l-0 md:pl-0">
            {thematic.title}
          </Subheading>
          <ul className="flex flex-col gap-y-16 md:col-start-2 md:col-end-5">
            {thematic.articles.map((article) => (
              <li
                key={article.id}
                className="relative flex flex-col gap-2"
              >
                <HeadingThree>{article.title}</HeadingThree>
                <Text className="text-sm">{article.description}</Text>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default ThematicList;
