import * as shape from "d3-shape";
import React from "react";
import { Text, View } from "react-native";
import { AreaChart, PieChart } from "react-native-svg-charts";
import { theme } from "../constants";

export const Wallet: React.FC<{}> = () => {
  const data = [50, 10, 40, 95, 85, 91, 35, 53, 24, 50];

  const randomColor = () =>
    ("#" + ((Math.random() * 0xffffff) << 0).toString(16) + "000000").slice(
      0,
      7
    );

  const pieData = data
    .filter(value => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: randomColor(),
        onPress: () => console.log("press", index)
      },
      key: `pie-${index}`
    }));
  return (
    <View>
      <Text>Wallet</Text>
      <PieChart style={{ height: 200 }} data={pieData} />
      <View>
        <AreaChart
          style={{ height: 100 }}
          data={data}
          contentInset={{ top: 30, bottom: 30 }}
          curve={shape.curveNatural}
          svg={{ fill: theme.colors.accent }}
          showGrid={false}
        />
      </View>
    </View>
  );
};
