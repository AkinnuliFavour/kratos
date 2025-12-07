"use client";

import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import { useMultiStepForm } from "@/lib/hooks/useMultiStepForm";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import {
  BasicInfoStep,
  UploadImagesStep,
  PropertyDetailsStep,
  ContactStep,
  PublishConfirmationStep,
  ListingFormData,
} from "./steps";

const TOTAL_STEPS = 5;
const STORAGE_KEY = "new-listing-draft";

const initialFormData: ListingFormData = {
  propertyTitle: "",
  propertyType: "",
  price: "",
  location: {
    address: "",
    lat: 6.5244, // Default to Lagos, Nigeria
    lng: 3.3792,
  },
  mainPhoto: "",
  otherPhotos: [],
  videos: [],
  description: "",
  features: {
    bedrooms: 0,
    kitchens: 0,
    bathrooms: 0,
    amenities: [],
  },
  contactInfo: {
    name: "Peter Johnson E.",
    phone: "07087425931",
    whatsapp: "07087425931",
    avatar: "/placeholder-avatar.jpg",
  },
};

export default function NewListingPage() {
  const [formData, setFormData, clearFormData] =
    useLocalStorage<ListingFormData>(STORAGE_KEY, initialFormData);

  const { currentStep, nextStep, prevStep, progress, isFirstStep } =
    useMultiStepForm(TOTAL_STEPS);

  const updateFormData = (data: Partial<ListingFormData>) => {
    setFormData({ ...formData, ...data });
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        if (!formData.propertyTitle.trim()) {
          toast.error("Please enter a property title");
          return false;
        }
        if (!formData.propertyType) {
          toast.error("Please select a property type");
          return false;
        }
        if (!formData.price) {
          toast.error("Please enter a price");
          return false;
        }
        if (!formData.location.address.trim()) {
          toast.error("Please enter a location");
          return false;
        }
        return true;

      case 2:
        if (!formData.mainPhoto) {
          toast.error("Please upload a main photo");
          return false;
        }
        return true;

      case 3:
        if (!formData.description.trim()) {
          toast.error("Please enter a property description");
          return false;
        }
        if (formData.features.bedrooms === 0) {
          toast.error("Please specify at least 1 bedroom");
          return false;
        }
        return true;

      case 4:
        // Contact info is pre-filled, no validation needed
        return true;

      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      nextStep();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    prevStep();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePublish = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/listings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Listing published successfully!");
        clearFormData();
        // Redirect to listings page or dashboard
        window.location.href = "/agent/dashboard/listings";
      } else {
        toast.error(data.error || "Failed to publish listing");
      }
    } catch (error) {
      console.error("Error publishing listing:", error);
      toast.error("Failed to publish listing. Please try again.");
    }
  };

  const handleEdit = () => {
    // Go back to step 1 for editing
    window.location.reload();
  };

  const renderStepContent = () => {
    const stepProps = { formData, updateFormData };

    switch (currentStep) {
      case 1:
        return <BasicInfoStep {...stepProps} />;
      case 2:
        return <UploadImagesStep {...stepProps} />;
      case 3:
        return <PropertyDetailsStep {...stepProps} />;
      case 4:
        return <ContactStep {...stepProps} />;
      case 5:
        return <PublishConfirmationStep />;
      default:
        return null;
    }
  };

  const renderNavigationButtons = () => {
    if (currentStep === 5) {
      return (
        <div className="flex gap-4 justify-center">
          <Button
            type="button"
            variant="outline"
            onClick={handleEdit}
            size="lg"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Edit
          </Button>
          <Button
            type="button"
            onClick={handlePublish}
            size="lg"
            className="bg-[#0F8F8F] hover:bg-[#0E7E7E]"
          >
            <Check className="h-4 w-4 mr-2" />
            Publish Listing
          </Button>
        </div>
      );
    }

    return (
      <div className="flex justify-between">
        {!isFirstStep && (
          <Button
            type="button"
            variant="outline"
            onClick={handleBack}
            size="lg"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        )}
        <Button
          type="button"
          onClick={
            currentStep === 4
              ? () => {
                  nextStep();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              : handleNext
          }
          size="lg"
          className="bg-[#0F8F8F] hover:bg-[#0E7E7E] ml-auto"
        >
          {currentStep === 4 ? "Publish" : "Next"}
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <Progress value={progress} className="h-3" />
        </div>

        {/* Step Content */}
        <div className="mb-8">{renderStepContent()}</div>

        {/* Navigation Buttons */}
        {renderNavigationButtons()}
      </div>
    </div>
  );
}
