import { useParams } from 'react-router-dom';
import vehicles from '../../../../data/vehicles';
import { useGetUser } from '../../../../hooks/user.hook';
import ProfileAvatar from './ProfileAvatar';

export default function ProfileHeader() {
  const { id } = useParams();
  const { user } = useGetUser(id);

  const vehicleType = vehicles.find(({ title }) => title === user?.vehicleType);

  const vehicleSubTypes = vehicleType?.subTypes;

  const vehicleIcon = user?.vehicleSubType
    ? vehicleSubTypes.find(({ title }) => title === user?.vehicleSubType)?.icon
    : vehicleType?.icon;

  const vehicleTitle = user?.vehicleSubType
    ? vehicleSubTypes.find(({ title }) => title === user?.vehicleSubType)?.title
    : vehicleType?.title;

  return (
    <>
      <div className="mb-6 flex items-center gap-3">
        <ProfileAvatar avatarURL={user?.avatarURL} />

        <div className="flex-1">
          <h3 className="mb-1 text-2xl">{user?.name}</h3>

          <span className="border-grey-500 font-inter mb-4 inline-block rounded-lg border px-3 text-foreground/50">
            #{user?._id?.slice(0, 5)}
          </span>

          <div className="relative z-10 flex items-center rounded-full bg-gradient-to-b from-tone-400 to-tone-600 py-3 pl-[16px] pr-[calc(76px/2)] text-sm w-[calc(100%-38px)] max-w-[240px]">
            <span className="dark:text-background">{vehicleTitle}</span>
            <div className="absolute right-0 top-1/2 h-16 w-16 -translate-y-1/2 translate-x-1/2">
              <img
                src={vehicleIcon}
                alt={vehicleTitle}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="absolute right-0 top-1/2 -z-20 aspect-square w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-tone p-4 opacity-10"></div>
            <div className="absolute right-0 top-1/2 -z-10 aspect-square w-[76px] -translate-y-1/2 translate-x-1/2 rounded-full bg-tone opacity-20"></div>
          </div>
        </div>
      </div>
    </>
  );
}
