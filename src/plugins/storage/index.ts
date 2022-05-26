import { Storage } from "aws-amplify";
import { S3ObjectInput } from "@/plugins/api/types";
import awsExports from "@/aws-exports";

export default {
  putItem: async (file: File): Promise<S3ObjectInput> => {
    const key = file.name + "-" + Date.now();
    const res = await Storage.put(key, file);
    return {
      key: res.key,
      region: awsExports.aws_user_files_s3_bucket_region,
      bucket: awsExports.aws_user_files_s3_bucket,
    };
  },
};
