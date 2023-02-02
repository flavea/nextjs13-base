import iExperience from './experience';
import iMedia from './media';

export default interface iBasicProfile {
  id: number;
  FullName: string;
  username: string;
  email: string;
  provider: string;
  password: string;
  confirmed: boolean;
  blocked: boolean;
  Icon: iMedia;
  Description: string;
  MentorProfile: number;
  BusinessProfile: number;
  DateOfBirth: string;
  WhatsApp: string;
  LinkedIn: string;
  Educations: Array<iEducation>;
  Experiences: Array<iExperience>;
  CV: iMedia;
  Gender: string;
  role: { id: number; name: string };
  Calendly: string;
  DisplayedOrganization: string;
  DisplayedTitle: string;
  Level: string;
  Expertises: Array<{ id: number | string; Name: string; Identifier: string }>;
  Industries: Array<{ id: number | string; Name: string; Identifier: string }>;
}
