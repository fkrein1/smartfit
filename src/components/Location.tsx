import fob_fountain from '../assets/images/forbidden-fountain.png';
import fob_locker from '../assets/images/forbidden-lockerroom.png';
import par_fountain from '../assets/images/partial-fountain.png';
import par_locker from '../assets/images/partial-lockerroom.png';
import rec_mask from '../assets/images/recommended-mask.png';
import rec_toalha from '../assets/images/recommended-towel.png';
import req_locker from '../assets/images/required-lockerroom.png';
import req_mask from '../assets/images/required-mask.png';
import req_toalha from '../assets/images/required-towel.png';

interface LocationProps {
  title: string;
  content?: string;
  street?: string;
  region?: string;
  city_name?: string;
  uf?: string;
  opened?: boolean;
  mask?: string;
  towel?: string;
  fountain?: string;
  locker_room?: string;
  schedules?: [{ weekdays: string; hour: string }];
}

export function Location(props: LocationProps) {
  const getLabels = ({
    mask,
    towel,
    fountain,
    locker_room,
  }: {
    mask?: string;
    towel?: string;
    fountain?: string;
    locker_room?: string;
  }) => {
    const labels = [];
    if (mask === 'required') labels.push(req_mask);
    if (mask === 'recommended') labels.push(rec_mask);
    if (towel === 'required') labels.push(req_toalha);
    if (towel === 'recommended') labels.push(rec_toalha);
    if (fountain === 'partial') labels.push(par_fountain);
    if (fountain === 'not_allowed') labels.push(fob_fountain);
    if (locker_room === 'allowed') labels.push(req_locker);
    if (locker_room === 'partial') labels.push(par_locker);
    if (locker_room === 'closed') labels.push(fob_locker);
    return labels;
  };

  const labels = getLabels(props);

  return (
    <div className="flex flex-col bg-gray-100 p-4 my-16 gap-2 mx-8">
      {props.opened && (
        <p className="font-gotham_bold text-green-500 text-sm ">Aberto</p>
      )}
      {!props.opened && (
        <p className="font-gotham_bold text-red-500 text-sm">Fechado</p>
      )}
      <p className="text-2xl font-gotham_bold">{props.title}</p>
      {props.content && (
        <>
          <div
            className="text-gray-500 text-sm mb-2"
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
          <hr />
        </>
      )}
      {props.street && (
        <div className="text-gray-500 text-sm">
          <p>
            {props.street} - {props.region}
          </p>
          <p>
            {props.city_name}, {props.uf}
          </p>
        </div>
      )}
      <div className="flex mt-2">
        {labels.map((label) => (
          <img key={label} className="h-16 w-16" src={label} />
        ))}
      </div>
      {props.schedules && (
        <div className="flex flex-wrap gap-8 mt-6">
          {props.schedules.map((schedule) => (
            <div key={`${schedule.weekdays}-${schedule.hour}`}>
              <p className="text-2xl font-gotham_bold">{schedule.weekdays}</p>
              <p> {schedule.hour}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
