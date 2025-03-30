import { Sprout } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

const DiseaseResponse = () => {
  const { data } = useSelector((state) => state.diseaseData);

  return (
    <div className="max-w-4xl w-full md:w-1/2 mx-auto p-6">
      <div className="border rounded-2xl p-6 bg-primary-foreground/50 border-primary-foreground h-full">
        {!data ? (
          <div>
            <div>
              <Sprout className="h-16 w-16 text-primary mx-auto mb-4 p-4 bg-primary-foreground rounded-full" />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No Disease Detection Yet
                </h3>
                <p className="text-gray-600">
                  Upload the Image to get the details of disease
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-3xl text-primary">Response:</p>
            <div>
              <p className="my-3">
                <span className="inline-block text-xl font-medium">
                  Disease Name:
                </span>
                <span className="inline-block text-xl underline pl-2">
                  Name
                </span>
              </p>
              <p className="my-3">
                <span className="inline-block text-xl font-medium">Cause:</span>
                <span className="inline-block text-xl underline pl-2">
                  Name
                </span>
              </p>
              <p className="my-3">
                <span className="inline-block text-xl font-medium">
                  Peak Season:
                </span>
                <span className="inline-block text-xl underline pl-2">
                  Name
                </span>
              </p>
              <p className="my-3">
                <span className="inline-block text-xl font-medium">
                  Remedy:
                </span>
                <span className="inline-block text-xl underline pl-2">
                  Name
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiseaseResponse;
