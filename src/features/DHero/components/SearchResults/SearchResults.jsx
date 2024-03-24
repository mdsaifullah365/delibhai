import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetchData } from "../../../../api/api";
import Container from "../../../../layouts/Container";
import Title from "../../../../layouts/Title";
import { isCurrentTimeWithinServiceTimes } from "../../../Profile/utils/timeHelpers";
import Hero from "./Hero";

export default function SearchResults() {
  const [heros, setHeros] = useState([]);
  const [searchParams] = useSearchParams();
  const { fetchData } = useFetchData();

  useEffect(() => {
    let _searchParams = Object.fromEntries([...searchParams]);
    const { vehicleType: vehicle, manualLocation } = _searchParams;
    const { division, district, upazila, union } = JSON.parse(manualLocation);
    _searchParams = {
      vehicle,
      division,
      district,
      upazila,
      union,
    };

    fetchData("/v1/user/heros", _searchParams).then((data) => {
      if (data?.data?.success) {
        let _heros = data.data.data;
        _heros = _heros.map((hero) => ({
          ...hero,
          isOnline: isCurrentTimeWithinServiceTimes(hero.serviceTimes),
        }));

        setHeros(_heros);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <>
      <Title color="black" title="ডেলিভাই হিরো" />
      <Container>
        <div className="mx-auto my-8 flex w-fit max-w-full flex-col gap-4">
          {heros?.map((hero) => (
            <Hero details={hero} key={hero.id} />
          ))}
        </div>
      </Container>
    </>
  );
}
