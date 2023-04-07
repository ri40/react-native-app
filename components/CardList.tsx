import { View, Text } from "react-native";
import React from "react";
import { Data } from "../App";

type Props = {
  data: Data;
};
const Card = ({
  number,
  text,
  ...other
}: {
  number: string | number;
  text: string;
  [other: string]: any;
}) => {
  return (
    <View
      className="flex justify-center items-center rounded-md w-36 h-36"
      {...other}
    >
      <View>
        <Text className="text-gray-700 font-semibold text-center">
          {number}
        </Text>
        <Text className="text-gray-700 font-semibold mt-3">{text}</Text>
      </View>
    </View>
  );
};
const CardList = ({ data }: Props) => {
  return (
    <View className="flex flex-row gap-5 flex-wrap my-5 mx-auto">
      <Card
        text="Public repos"
        number={data.public_repos}
        className=" bg-orange-400"
      />
      <Card text="Following" number={data.following} className=" bg-sky-600" />
      <Card
        text="followers"
        number={data.followers}
        className=" bg-green-500"
      />
    </View>
  );
};

export default CardList;