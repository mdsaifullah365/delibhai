import { cn } from '@/lib/utils';

export function MapSpin({ size = 10, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('fill-foreground', className)}
    >
      <path d="M4.10593 10C2.71359 8.89145 1.68118 7.8369 1.00871 6.83635C0.336236 5.8358 0 4.85752 0 3.9015C0 2.76468 0.409873 1.83022 1.22962 1.09813C2.04945 0.366045 3.00822 0 4.10593 0C5.18973 0 6.13951 0.365514 6.95526 1.09654C7.77109 1.82757 8.18496 2.79311 8.19687 3.99316L9.26443 2.95201L10 3.67344L7.63435 5.9936L5.25983 3.67638L5.9954 2.95495L7.05984 3.9961C7.04593 3.15242 6.75346 2.46134 6.18245 1.92287C5.61152 1.3844 4.91935 1.11517 4.10593 1.11517C3.27652 1.11517 2.57435 1.38689 1.99943 1.93035C1.4245 2.4738 1.13703 3.13881 1.13703 3.92539C1.13703 4.60348 1.37826 5.31919 1.86073 6.07252C2.34328 6.82585 3.08569 7.64634 4.08794 8.53398C4.22863 8.41037 4.35787 8.29134 4.47565 8.17688C4.59336 8.06242 4.71201 7.94748 4.83163 7.83204C4.79398 7.74609 4.76466 7.65962 4.74367 7.57261C4.72268 7.48568 4.71218 7.39418 4.71218 7.29811C4.71218 6.93545 4.84042 6.62835 5.0969 6.3768C5.35346 6.12518 5.66662 5.99936 6.03638 5.99936C6.40615 5.99936 6.71927 6.12518 6.97575 6.3768C7.23231 6.62835 7.36059 6.93545 7.36059 7.29811C7.36059 7.66076 7.23231 7.9679 6.97575 8.21953C6.71927 8.47108 6.40615 8.59685 6.03638 8.59685C5.97374 8.59685 5.91535 8.59374 5.86121 8.58753C5.80706 8.58133 5.75184 8.57005 5.69553 8.55371C5.46187 8.78516 5.21468 9.02163 4.95396 9.26313C4.69315 9.50471 4.41047 9.75033 4.10593 10Z" />
    </svg>
  );
}

export function MapPin({ size = 10, className }) {
  return (
    <svg
      width={size * 0.8}
      height={size}
      viewBox="0 0 8 10"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('fill-foreground', className)}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 3.961C0 1.7765 1.7945 0 4 0C6.2055 0 8 1.7765 8 3.961C8 6.6985 4.4755 9.7505 4.3255 9.879C4.2315 9.9595 4.116 10 4 10C3.884 10 3.7685 9.9595 3.6745 9.879C3.5245 9.7505 0 6.6985 0 3.961ZM4.00056 8.82272C3.16306 8.03072 1.00056 5.80722 1.00056 3.96072C1.00056 2.32822 2.34606 0.999721 4.00056 0.999721C5.65506 0.999721 7.00056 2.32822 7.00056 3.96072C7.00056 5.80722 4.83806 8.03072 4.00056 8.82272ZM2.25 3.75C2.25 2.785 3.035 2 4 2C4.965 2 5.75 2.785 5.75 3.75C5.75 4.715 4.965 5.5 4 5.5C3.035 5.5 2.25 4.715 2.25 3.75ZM3.25 3.74972C3.25 4.16322 3.5865 4.49972 4 4.49972C4.4135 4.49972 4.75 4.16322 4.75 3.74972C4.75 3.33622 4.4135 2.99972 4 2.99972C3.5865 2.99972 3.25 3.33622 3.25 3.74972Z"
      />
    </svg>
  );
}

export function Station({ size = 16, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 11 10"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('fill-foreground', className)}
    >
      <path d="M6.69954 8.8419C6.7064 9.04186 6.71522 9.24849 6.53096 9.37703C6.43883 9.44178 6.31239 9.48939 6.19968 9.49415C5.89093 9.50653 5.75176 9.30847 5.71451 8.84095C4.51777 8.84095 3.32103 8.84095 2.10567 8.84095C2.10567 8.89713 2.10763 8.95711 2.10567 9.01615C2.09685 9.2999 1.8871 9.50177 1.60483 9.49986C1.33431 9.49796 1.12848 9.28943 1.12358 9.01139C1.1226 8.95521 1.12358 8.89808 1.12358 8.84666C1.03929 8.82666 0.964802 8.81619 0.896193 8.79048C0.708008 8.72097 0.606075 8.55339 0.606075 8.32581C0.606075 6.95085 0.605094 5.57684 0.605094 4.20187C0.605094 3.74101 0.610975 3.28015 0.602154 2.81929C0.599214 2.66218 0.659002 2.54982 0.776617 2.4527C1.05105 2.22703 1.37352 2.09087 1.7097 1.98327C2.22525 1.81759 2.75746 1.73856 3.29849 1.70332C3.91499 1.66333 4.52855 1.6719 5.13917 1.75474C5.69589 1.82997 6.2379 1.95946 6.73385 2.23084C6.79854 2.26607 6.8593 2.30797 6.92203 2.34701C7.1308 2.47841 7.22391 2.64885 7.22195 2.90689C7.21117 4.68082 7.21607 6.45571 7.21607 8.22964C7.21607 8.64194 7.12296 8.7543 6.69954 8.8419ZM1.21768 6.50237C3.02013 6.50237 4.80985 6.50237 6.60545 6.50237C6.60545 5.45115 6.60545 4.40659 6.60545 3.35823C4.80593 3.35823 3.01327 3.35823 1.21768 3.35823C1.21768 4.4085 1.21768 5.45115 1.21768 6.50237ZM3.00641 2.82215C3.61605 2.82215 4.21295 2.82215 4.81671 2.82215C4.81671 2.72407 4.81671 2.63171 4.81671 2.53554C4.21001 2.53554 3.61017 2.53554 3.00641 2.53554C3.00641 2.63361 3.00641 2.72312 3.00641 2.82215ZM1.61365 8.06396C1.84594 8.06396 2.03314 7.88685 2.0351 7.66404C2.03804 7.44313 1.84888 7.2565 1.62051 7.25555C1.38332 7.25364 1.19219 7.43647 1.19317 7.66309C1.19513 7.8859 1.38136 8.06396 1.61365 8.06396ZM6.20458 7.2565C5.97229 7.25841 5.79194 7.43647 5.79194 7.66404C5.79194 7.8878 5.97915 8.06682 6.21144 8.06586C6.45157 8.06396 6.63191 7.88495 6.62897 7.65166C6.62603 7.42694 6.44079 7.2546 6.20458 7.2565Z" />
      <path d="M8.84487 2.72799C8.06959 2.59468 7.753 1.96909 7.84024 1.43111C7.92649 0.900736 8.44596 0.478915 8.99581 0.500816C9.61133 0.525573 10.074 0.965485 10.1092 1.58441C10.1367 2.06812 9.79658 2.61373 9.09578 2.72228C9.09578 4.78282 9.09578 6.84526 9.09578 8.91628C9.39668 8.98198 9.62211 9.14195 9.74267 9.44379C9.2232 9.44379 8.71647 9.44379 8.19602 9.44379C8.31168 9.14766 8.53417 8.98484 8.84389 8.91533C8.84487 6.85478 8.84487 4.7952 8.84487 2.72799Z" />
      <path d="M0.510799 4.66482C0.510799 4.85906 0.511779 5.05331 0.510799 5.24756C0.509819 5.40848 0.432389 5.47989 0.262827 5.47989C0.0854231 5.48084 0.00211189 5.40848 0.00113176 5.24756C-0.000828503 4.86287 0.000151627 4.47819 0.00113176 4.0935C0.00211189 3.92782 0.0834627 3.85355 0.256946 3.8545C0.43827 3.85641 0.509819 3.92401 0.510799 4.0935C0.511779 4.28394 0.510799 4.47438 0.510799 4.66482Z" />
      <path d="M7.82585 4.66577C7.82585 4.85525 7.82683 5.04569 7.82585 5.23518C7.82487 5.40752 7.74548 5.48084 7.56415 5.47989C7.38969 5.47894 7.31324 5.40752 7.31226 5.23899C7.31128 4.85906 7.31128 4.47914 7.31226 4.09921C7.31324 3.92782 7.38773 3.85545 7.56023 3.8545C7.7445 3.85355 7.82291 3.92401 7.82487 4.09636C7.82781 4.28584 7.82585 4.47533 7.82585 4.66577Z" />
    </svg>
  );
}